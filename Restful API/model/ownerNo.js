const data = [

     { OwnerNo: '0001' , CondoID: '1101' , firstname: 'Peerawat' , lastname: 'Yoorot' },
     { OwnerNo: '0002' , CondoID: '1102' , firstname: 'Panipark' , lastname: 'Phansoda' },
     { OwnerNo: '0003' , CondoID: '1103' , firstname: 'Taylor' , lastname: 'Swift' },
     { OwnerNo: '0004' , CondoID: '1201' , firstname: 'Katy' , lastname: 'Perry' },
     { OwnerNo: '0005' , CondoID: '1202' , firstname: 'Avril' , lastname: 'Lavinge' },
     { OwnerNo: '0006' , CondoID: '1203' , firstname: 'Olivia' , lastname: 'Rodrigo' },
     { OwnerNo: null , CondoID: '2101' , firstname: null, lastname: null },
     { OwnerNo: null , CondoID: '2102' , firstname: null , lastname: null },
     { OwnerNo: null , CondoID: '2103' , firstname: null , lastname: null },
    ];

    let OwnerNo = {

            find: () => new Promise(
                (resolve, reject) => resolve(data) 
            ),
    
        // Find information 

        findOne:(OwnerNo) => {
            return new Promise((resolve,reject)=> {
                let index = data.findIndex(e=>e.OwnerNo === OwnerNo)
                if(index < 0) reject ("Not Found" + OwnerNo);
                resolve(data[index]) 
            }
        )},
    }

      

    export default OwnerNo;   