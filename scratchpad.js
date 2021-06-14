
const    children = [
      {
          "type": "string",
          "isImage": true,
          "child": "user"
      },
      {
          "type": "object",
          "isImage": false,
          "child": {first_name: undefined}
      },
      {
          "type": "object",
          "isImage": false,
          "child": {last_name: undefined}
      }
    ];

const vals = Object.values(children[1].child);
vals;

const isForm = children.some((child)=> child.type === 'object' && Object.values(child.child).some(val => val === undefined));
isForm;