import OwnerNo from '../model/ownerNo.js'

export const list = (req, res) => {
     OwnerNo.find().then(result =>  res.json(result));
    };
    
    // add new product 
    export const create = (req, res) => {
          OwnerNo.insert(req.body).then(()=> {
               return res.send({success: "Create Successfully"})})
        };
     

        export const get = (req, res) => {
                const CondoID = req.params.CondoID;
            OwnerNo.findOne(CondoID)
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
            
            // Update a product identified by the sku in the request
            export const put = (req, res) => {
                // Validate Request
                const data = req.body || {};
                if (!data || data.CondoID!= req.params.CondoID) 
                  return res.status(422).send({error: 'CondoID must be alphanumeric.'});
                // Find Product and update it with the request body
            OwnerNo.findAndUpdate(req.params.CondoID,req.body,true)
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
                OwnerNo.delete(data.CondoID).then(
                    r => res.status(200).send({success: true})
                  ).catch(err => {
                    return res.status(404).send({
                      errors: {global: "Product not found with sku " + req.params.CondoID
                  }});                
                  })
        
                };
        
          
                export const findroom = (req, res) => {
                        const status = req.params.status;
                    OwnerNo.findOne(status)
                       .then(product => {
                          if(!product) {
                            return res.status(404).send({
                                errors: {global: "Product not found with CondoID " + status
                            }});            
                          }
                          res.json(product); // default status = 200
                        }).catch(err => {
                          return res.status(500).send({
                            errors: {global: "Error retrieving Product with CondoID " + status
                          }});
                        });
                      };