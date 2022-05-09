// Retrieve and return all products from the const Products.
import Products from '../model/condoModel.js'


export const list = (req, res) => {
  Products.find().then(result =>  res.json(result));
};

// add new product 
export const create = (req, res) => {
      Products.insert(req.body).then(()=> {
           return res.send({success: "Create Successfully"})})
    };
 
// Find a single product with a CondoID
export const get = (req, res) => {
        const CondoID = req.params.CondoID;
        Products.findOne(CondoID)
       .then(product => {
          if(!product) {
            return res.status(404).send({
                errors: {global: "Product not found with CondoID " + CondoID
            }});            
          }
          res.json(product); // default status = 200
        }).catch(err => {
          return res.status(500).send({
            errors: {global: "Error retrieving Product with CondoID " + CondoID
          }});
        });
      };

  //    export const findStatus = (req, res) => {
   //           const status = req.params.status;
   //           Products.findStatus(status)
    //         .then(product => {
    //            if(!product) {
     //             return res.status(404).send({
     //                 errors: {global: "Can't identify status " + status
     //             }});            
     //           }
     //           res.json(product); // default status = 200
     //         }).catch(err => {
      //          return res.status(500).send({
      //            errors: {global: "Error retrieving Product with CondoID " + status
       //         }});
       //       });
       //     };
        
    
    // Update a product identified by the sku in the request
    export const put = (req, res) => {
        // Validate Request
        const data = req.body || {};
        if (!data || data.CondoID!= req.params.CondoID) 
          return res.status(422).send({error: 'CondoID must be alphanumeric.'});
        // Find Product and update it with the request body
        Products.findAndUpdate(req.params.CondoID,req.body,true)
        .then(product => {
          if(!product) {
            return res.status(404).send({
                   errors: {global: "Product not found with sku " + req.params.CondoID
            }});
          }
          res.send(product);
        }).catch(err => {
          if(err.kind === 'ObjectId') {
            return res.status(404).send({
                   errors: {global: "Product not found with CondoID " + req.params.CondoID
            }});                
          }
          return res.status(500).send({
                  errors: {global: "Error updating Product with CondoID " + req.params.CondoID
          }});
        });
      };

    
    //product delete
    export const remove = (req, res) => {
          const data = req.body || {};
          if (!data || data.CondoID!= req.params.CondoID)
            return res.status(422).send({error: 'CondoID must be alphanumeric.'});
          Products.delete(data.CondoID).then(
            r => res.status(200).send({success: true})
          ).catch(err => {
            return res.status(404).send({
              errors: {global: "Product not found with sku " + req.params.CondoID
          }});                
          })

        };

  