
class demo{
    static main(arr){
            
        var n = arr.length;
        if(n<2) {
            return 0;
        }
        
        var map = {};
        arr.forEach((item,idx)=>{
            if(map[item] === undefined) {
                map[item] = [];
            }
            map[item].push(idx);
        });
        
        var queue = [0], step =0, visited = {0:true};
        while(queue.length>0) {
            var layer = queue.length;
            for(var i=0;i<layer;i++) {
                var item = queue.shift();
                if(item == n-1) {
                    return step;
                }
                
                var next = map[arr[item]] ? new Set(map[arr[item]]) : new Set();
                next.add(item+1);
                next.add(item-1);
                next.forEach(a => {
                    if(a>=0 && a<n && !visited[a]) {
                        visited[a] = true;
                        queue.push(a);
                    }
                });
                delete map[arr[item]];
            }
            step++;
        }
        return step;
    }
}
var ar = [];
var size = prompt("Enter the array size");
for(var i=0; i<size; i++) {
    ar[i] = prompt("Enter the array elements: "+(i+1));
}
console.log(ar);
var step = demo.main(ar);
console.log(step);