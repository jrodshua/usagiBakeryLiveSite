import React from "react"
import HelpPage from "./help"
import styled from "styled-components"

const StyledWrapper = styled.main`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 4.75rem;

  @media (min-width: 950px) {
    max-width: 1500px;
    background: #fff;
    border-radius: 3px;
    margin: 0 auto 1rem auto;
  }
`

const faqArr = [
  {
    title: `Are your products vegan?`,
    body: `Yes! usagi. bakery is a 100% vegan operation, baked by a vegan, for vegans.`,
    id: 1,
  },
  {
    title: `Are your products gluten-free?`,
    body: `Most of our baked goods are not gluten-free. However, our cakes and cupcakes can be made gluten-free upon request, with a $2 charge (as gluten-free flour can be a bit pricey). Feel free to email us about which of our other products can be made gluten-free as well!`,
    id: 2,
  },
  {
    title: `I have a certain food allergy. Can you accommodate your products for me?`,
    body: `Absolutely! Please email us in advance for your order, and we will do our best to help you out. \n \n In the case of nuts: \n Some of our products contain nuts or coconut (tree nuts), and most can be substituted out (such as with our banana nut bread). In the case of our cakes, the butter we use in our buttercream contains cashews and coconut, but we can swap it out for another butter that suits your needs. \n \n In the case of soy: \n Most of our products do not contain soy! We prefer to bake with oat milk, and the butter we use does not contain any soy. \n \n In the case of gluten: \n Please see “Are your products gluten-free?`,
    id: 3,
  },
  {
    title: `What kind of butter do you use in your cakes and other baked goods?`,
    body: `usagi. bakery’s preferred butter is Miyoko’s. It’s a product that really vibes with our ethos: certified B-corp, organic, compostable packaging, minimal ingredients, and 100% vegan! \n \n We also use their cream cheese for our cheesecake and cream cheese frosting. For those with nut allergies, please note that both products do contain cashews and coconut.`,
    id: 4,
  },
  {
    title: `Why do some cakes or custom cakes cost more than others?`,
    body: `Some cakes, like our matcha cake, use more expensive items than others. Also, the butter we use for our buttercream frosting is a little pricey (but for a good cause!), so more decoration equals a more expensive cake. Since we are a small business that currently cannot operate at a loss, we have to charge more for select items. Please know that every dollar you spend with us goes towards keeping our small business alive and able to grow, and doesn’t feed any scumbag CEOs or anything (:`,
    id: 5,
  },
  {
    title: `Do you guys use fondant? Why isn’t my cake bright red or blue?`,
    body: `Fondant is, admittedly, not really usagi. bakery’s vibe. However, if you are dead-set on fondant for your custom cake, we do have a marshmallow fondant that we can make for you. Please note that there will be an additional charge for the fondant. \n \n The bakery also does not use artificial food coloring, i.e. blue lake #somenumber, etc. We prefer to use natural food-coloring, which generally comes out more pastel or muted (but still very beautiful!) or simply resort to using ingredients like matcha for green, ground-up dried strawberries for pink, blue butterfly pea powder for blue, and so on. \n \n Please refer to our custom cake photos for a general idea of what we offer in terms of cake decorations. Thank you for understanding!`,
    id: 6,
  },
  {
    title: `Do you deliver? Where can I pick up?`,
    body: `Currently, usagi. bakery currently offers delivery services, but it really helps out if you could swing by our kitchen and pick up your order!`,
    id: 7,
  },
  {
    title: `How do I get my order?`,
    body: `Orders are available to be picked up at our cottage food operation located in Southwest Las Vegas, and the address will be provided the day before order pick up. Alternatively, we can meet you at a location of your choice. Delivery is also available ($5 to $15 delivery fee may apply, depending on your location).`,
    id: 8,
  },
  {
    title: `Are you at the Farmer's Market? Do you have any pop-ups planned?`,
    body: `Stay tuned for updates on our Instagram! We're planning to have a Farmer’s Market stand (or two) in the future, where you will be able to pick up pre-orders, or select from the baked goods we will have available there.`,
    id: 9,
  },
]

const HelpComp = () => {
  return (
    <StyledWrapper>
      {faqArr.map(f => {
        return (
          <HelpPage key={f.id + 1} fTitle={f.title} fBody={f.body} val={f.id} />
        )
      })}
    </StyledWrapper>
  )
}

export default HelpComp
