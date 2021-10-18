/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.updateStripeUse = async(req, res) => {
  var query = req.query
  var sub_id = query.sub_id
  var apikey = process.env.STRIPE_RESTRICTED_KEY
    const stripe = require('stripe')(apikey);
    
        const timestamp = new Date();
        try{
const usageRecord = await stripe.subscriptionItems.createUsageRecord(
        sub_id,
        {quantity: 1, timestamp: timestamp}
        );
        response = await usageRecord;
        console.log('response:', response)
        res.send({
          "status" : 200,
          "data" : response
        })
      }
      catch(err){
        console.log(err)
        res.send({
          "status" : 500,
          "err" : err
        })
      }
      
    
   
};
