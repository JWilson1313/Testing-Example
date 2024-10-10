// UNIT TESTS
// *Expect [multiplication] to be number
// *Expect [multiplication with a letter inputted] to be an error
// *Expect [multiplication] to be product of numbers inputted

// What should happen when there are multiples of the same odd number in the arrays?
// *Expect [contactOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])] should result in [-1, 1, 3, 9, 15]
// *Expect [contactOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])] should result in [only odd numbers displayed]

// What should happen with unexpected inputs?
// What kinds of unexpected inputs should we worry about?
// *Expect [contactOdds([if even numbers are inputted])] should result in [`there are no odd numbers here`]
// *Expect [contactOdds([if letters are inputted])] should result in [`there are no odd numbers here`]
// *Expect [contactOdds([if letters and odd numbers are inputted])] should result in [`Please only insert odd numbers`]

// FUNCTIONAL TESTS
// Functional test specifications can be worded slightly more naturally:

// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
// *When a user clicks "Check out" without logging into an account, they should be shown a warning saying they're about to check out without logging into an account and prompted to log in if they would like to, or to check out without logging in.
// *When a user clicks "Log In" but has filled out an incorrect login or password, they should be shown an error and prompted to sign in if they have not yet.
// *When a user clicks "Log In" but does not have an account, they should be prompted to create an account.
// *When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.
// *After a user creates their new account, they should be taken to their cart
// *When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to their cart.

// Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
// What should happen if the cart is empty?

// What needs to be shown to the user at each step of check out?
// *When a user clicks in to their car, they are shown a list of items they have added to their cart, then are prompted to continue to check out
// *If the user does not have any items in their cart, they are prompted to add items into their cart
// *When a user checks out, they are prompted wether they want their items delivered to their home or if they prefer picking up at the store
// *If a user wants their items delivered, they are asked to provide an address for delivery
// *If a user wants pick up their items, they are prompted to add a time for pickup at the store
// *When a user is ready to pay for their items, they are prompted to provide their payment information
// *When a user adds their payment information, they are prompted to save their information for convenience
// *when a user finishes their payment, they are prompted with a thank you window providing their delivery or pick up information

// What behaviors of this feature does the prompt miss or gloss over?
// Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!
