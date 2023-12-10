

# In this lecture i have learned about one Interview Question regarding the usestate.

# setting setCount - like -

setCount(count+1)
setCount(count+1)
setCount(count+1)
setCount(count+1)

## if we put like this in our add value function , but here it will not goinf to be adding count values by 1.

## To do this syntax should be - 

setCount((count) => count+1)
setCount((count) => count+1)
setCount((count) => count+1)
setCount((count) => count+1)

This will work as we want
