let tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

let res = [];
function DFS(node) {
    if(node) {
        res.push(node.value);
        DFS(node.left);
        DFS(node.right);
    }
}
DFS(tree)
console.log(res);