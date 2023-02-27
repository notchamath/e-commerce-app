const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeCheckout = asyncHandler( async (req, res) => {

    const items =  req.body.map(item => {
        return {
            price_data:{
                currency: 'usd',
                product_data: {
                    name: item.name.toUpperCase()
                },
                unit_amount: parseFloat(item.price)
            },
            quantity: item.quantity
        }
    });


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.SITE_URL}/checkoutsuccess`,
        cancel_url: `${process.env.SITE_URL}/`,
        line_items: items
    });


    res.json({ url: session.url })
});

module.exports = {stripeCheckout};