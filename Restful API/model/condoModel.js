const data = [

     { CondoID: '1101' , status: true ,unitNum: '1' , floorNum: '1' , roomNum: '01' ,  OwnerNo: '0001'},
     { CondoID: '1102' , status: true  ,unitNum: '1' , floorNum: '1' , roomNum: '02' ,  OwnerNo: '0002' },
     { CondoID: '1103' , status: true  ,unitNum: '1' , floorNum: '1' , roomNum: '03'  ,  OwnerNo: '0003'},
     { CondoID: '1201' , status: true  ,unitNum: '1' , floorNum: '2' , roomNum: '01' ,  OwnerNo: '0004' },
     { CondoID: '1202' , status: true  ,unitNum: '1' , floorNum: '2' , roomNum: '02'  , OwnerNo: '0005' },
     { CondoID: '1203' , status: true  ,unitNum: '1' , floorNum: '2' , roomNum: '03' , OwnerNo: '0006' },
     { CondoID: '2101' , status: false  ,unitNum: '2' , floorNum: '1' , roomNum: '01' , OwnerNo: null },
     { CondoID: '2102' , status: false  ,unitNum: '2' , floorNum: '1' , roomNum: '02' , OwnerNo: null },
     { CondoID: '2103' , status: false ,unitNum: '2' , floorNum: '1' , roomNum: '03'  , OwnerNo: null},
  


    ];

    let Products = {
        find: () => new Promise(
            (resolve, reject) => resolve(data) 
        ),

    findOne:(CondoID) => {
        return new Promise((resolve,reject)=> {
            let index = data.findIndex(e=>e.CondoID === CondoID)
            if(index < 0) reject ("Not Found" + CondoID);
            resolve(data[index]) 
        }
    )},


    
    findStatus:(status) => {
        return new Promise((resolve,reject)=> {
            let index = data.findIndex(e=>e.status === status)
            if(index < 0) reject ("Not Found" + status);
            resolve(data[index]) 
        }
    )},

     // Find and update a single product with an sku
         findAndUpdate: (CondoID, product, newItem=true) => {
                return new Promise((resolve, reject) => {
                    let index = data.findIndex(e=> e.CondoID === CondoID);
                    if (index < 0)
                        if (!newItem) reject("Not found" + CondoID);
                        else {
                            data.push(product)
                            resolve(data[data.length-1]);
                        }
                    else data.splice(index, 1, product)
                    resolve(data[index])
                }
            )},
            
    // Find and update asingle product with an sku
        insert: (product) => {
                return new Promise((resolve, reject) => {
                    data.push(product);
                    resolve(data[data.length-1]);
                }
            )},
                
    // Delete a product by an sku

    delete: (CondoID) => {
            return new Promise((resolve, reject) => {
                let index = data.findIndex(e => e.CondoID === CondoID)
                if (index <0) return reject("Not found" + CondoID);
                data.splice(index, 1)
                resolve(1)         
            }
        )},
    
   

}
    export default Products;