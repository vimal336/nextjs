import { useState, useEffect } from 'react';

async function getPageAndParse() {
  let url = 'https://api.nexaflow.xyz/api/page/66d2e674c4843fadfbfb337c';
  url += '?websiteId=66d2e5a7c4843fadfbfb336b';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': '~IxP2nxD3iyH0',
    }
  })
  const responseJSON = await response.json();
  let result = {};
  responseJSON.blocks.map(block => {
    if (block.nested) return;
    if (Array.isArray(block.blockData)) {
      let arr = block.blockData.map(nestedObj => {
        return Object.values(nestedObj).reduce((acc, obj) => {
          let blockData = obj.blockData;
          if (typeof blockData === 'string') {
            let nested = responseJSON.blocks.find(block => block.id === blockData);
            let blockName = obj.fieldName;
            if (Array.isArray(nested.blockData)) {
              nested = nested.blockData.map(nestedObj => {
                return Object.values(nestedObj).reduce((acc, { blockData }) => {
                  return { ...acc, ...blockData };
                }, {});
              });
              blockData = { [blockName]: nested };
            }
            if (typeof nested.blockData === 'object') {
              nested = Object.values(nested.blockData).reduce((acc, { blockData }) => {
                return { ...acc, ...blockData };
              }, {});
              blockData = { [blockName]: nested };
            }
          }
          return { ...acc, ...blockData };
        }, {});
      });
      result[block.blockName] = arr;
      return;
    }
    if (block.blockType === 'group') {
      result[block.blockName] = Object.values(block.blockData).reduce((acc, { blockData }) => {
        return { ...acc, ...blockData };
      }, {});
      return;
    }

    result[block.blockName] = block.blockData[block.blockName];
  });
  return result;
}

function Userblock() {
  const [cmsData, setCmsData] = useState({});

  useEffect(() => {
    getPageAndParse().then(cmsParsedData => {
      setCmsData(cmsParsedData);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <div>
      <h1>CMS Page Data</h1>
      <div>
        {Object.keys(cmsData).map((blockName, index) => (
          <div key={index}>
            <h2>{blockName}</h2>
            {Array.isArray(cmsData[blockName]) ? 
              <ul>
                {cmsData[blockName].map((item, index) => 
                  <li key={index}>{JSON.stringify(item)}</li>
                )}
              </ul> 
              : 
              <p>{JSON.stringify(cmsData[blockName])}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Userblock;