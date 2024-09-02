import { useEffect, useState } from "react";

async function getPageAndParse() {
  try {
    let url = "https://api.nexaflow.xyz/api/page/66d2e674c4843fadfbfb337c";
    url += "?websiteId=66d2e5a7c4843fadfbfb336b";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "~IxP2nxD3iyH0",
      },
    });
    const responseJSON = await response.json();
    let result = {};
    responseJSON.blocks.map((block) => {
      if (block.nested) {
        return;
      }
      if (Array.isArray(block.blockData)) {
        let arr = block.blockData.map((nestedObj) => {
          return Object.values(nestedObj).reduce((acc, obj) => {
            let blockData = obj.blockData;
            if (typeof blockData === "string") {
              let nested = responseJSON.blocks.find(
                (block) => block.id === blockData
              );
              let blockName = obj.fieldName;
              if (Array.isArray(nested.blockData)) {
                nested = nested.blockData.map((nestedObj) => {
                  return Object.values(nestedObj).reduce(
                    (acc, { blockData }) => {
                      return { ...acc, ...blockData };
                    },
                    {}
                  );
                });
                blockData = { [blockName]: nested };
              }
              if (typeof nested.blockData === "object") {
                nested = Object.values(nested.blockData).reduce(
                  (acc, { blockData }) => {
                    return { ...acc, ...blockData };
                  },
                  {}
                );
                blockData = { [blockName]: nested };
              }
            }
            return { ...acc, ...blockData };
          }, {});
        });
        result[block.blockName] = arr;
        return;
      }
      if (block.blockType === "group") {
        result[block.blockName] = Object.values(block.blockData).reduce(
          (acc, { blockData }) => {
            return { ...acc, ...blockData };
          },
          {}
        );
        return;
      }

      result[block.blockName] = block.blockData[block.blockName];
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}

const Userpage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageAndParse()
      .then((cms_parsed_data) => {
        setData(cms_parsed_data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    1: cms_1,
    userdetails: cms_userdetails,
    About: cms_About,
    contact_link: cms_contact_link,
    customer_review: cms_customer_review,
    user2name: cms_user2name,
    groups: cms_groups,
    user1: cms_user1,
    namelist: cms_namelist,
    All_List: cms_All_List,
  } = data;

  return (
    <div>
      <h4>ALL Blocks</h4>
      {cms_1 && (
        <div>
          <h2>CMS 1</h2>
          {JSON.stringify(cms_1, null, 2)}
        </div>
      )}
      {cms_userdetails && (
        <div>
          <h2>User Details</h2>
          {JSON.stringify(cms_userdetails, null, 2)}
        </div>
      )}
      {cms_About && (
        <div>
          <h2>About</h2>
          {JSON.stringify(cms_About, null, 2)}
        </div>
      )}
      {cms_contact_link && (
        <div>
          <h2>Contact Link</h2>
          <a href={cms_contact_link} target="_blank">
            {cms_contact_link}
          </a>
        </div>
      )}
      {cms_customer_review && (
        <div>
          <h2>Customer Review</h2>
          {JSON.stringify(cms_customer_review, null, 2)}
        </div>
      )}
      {cms_user2name && (
        <div>
          <h2>User 2 Name</h2>
          {JSON.stringify(cms_user2name, null, 2)}
        </div>
      )}
      {cms_user1 && (
        <div>
          <h2>User 1</h2>
          {JSON.stringify(cms_user1, null, 2)}
        </div>
      )}
      {cms_namelist && (
        <div>
          <h2>Name List</h2>
          {JSON.stringify(cms_namelist, null, 2)}
        </div>
      )}
      {cms_All_List && cms_All_List.length > 0 && (
        <div>
          <h2>All List</h2>
          <ul>
            {cms_All_List[0].All_List.map((item, index) => (
              <li key={index}>{item.lists}</li>
            ))}
          </ul>
        </div>
      )}
      {cms_groups && (
        <div>
          <h2>Groups</h2>
          {Object.values(cms_groups).map((groupDetail, index) => (
            <p key={index}>{groupDetail}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Userpage;
