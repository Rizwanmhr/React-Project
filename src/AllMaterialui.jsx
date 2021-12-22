// import React,{useState} from 'react'
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import {FormControl,FormControlLabel,Checkbox,Box} from '@material-ui/core'
// const Checkboxs = () => {
//     const [remember,setRemember] = useState(false)
 
//     const handleValue = (e) => {
//         setRemember(e.target.checkd)
//     }
//     return (
//         <div>
//               {/* {remember ? 'true' : 'false'}   */}
//   {/* <Box component = 'form'> */}
//              {/* <FormControl> */}
//       <Checkbox onChange={handleValue} value={remember} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
//              {/* </FormControl> */}
//          {/* </Box> */}
//          </div>
//     )
// }

// export default Checkboxs


// import React from 'react'
// import {Checkbox,FormControl,FormControlLabel} from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// const Checkboxs = (e) => {
//     const [remember, setRemember] = React.useState(false)
//     const handleCheck = (e) => {
//         setRemember(e.target.checked)
//     }
//     return (
//         <div>
//             <FormControl>
//             <FormControlLabel label='Check this ' control={<Checkbox icon={<FavoriteBorderIcon />}checkedIcon={<FavoriteIcon />} onChange={handleCheck} check={remember}  />} />
//             </FormControl>
//         </div>
//     )
// }

// export default Checkboxs

// //Paginations
// import React from 'react'
// import {Pagination} from '@material-ui/lab'
// const Pagginations = () => {
//     return (
//         <div>
//            <Pagination count={10} />
//         </div>
//     )
// }

// export default Pagginations


//plusButton

// import React from 'react'
// import {Fab, Container} from '@material-ui/core'
// import AddIcon from '@material-ui/icons/Add';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   root:{
//       position:'fixed',
//       bottom:'5%',
//       right:'5%'
//   }
// }))
// const PlusButton = () => {
//     const classes = useStyles()
//     return (
//         <div>
//             <Container >
//             <Fab className={classes.root}>
//              <AddIcon />
//             </Fab>
//             </Container>
//         </div>
//     )
// }

// export default PlusButton



//radio button


// import React,{useState} from 'react'
// import {FormControl, Radio, FormLabel,RadioGroup,FormControlLabel} from '@material-ui/core'
// const RaddioButton = () => {
//     const [gendre, setGendre] = useState('');
//     const handleCheckbox = (e) => {
//         setGendre(e.target.value)
//     }
//     return (
//         <div>
//             <FormControl>
//             <FormLabel>Choose Your Gendre</FormLabel>
//             <RadioGroup value={gendre} onChange={handleCheckbox} row>
//                 <FormControlLabel label='male' control={<Radio />} value='male' />
//                 <FormControlLabel label='female' control={<Radio />} value='female' />
//                 <FormControlLabel label='others' control={<Radio />} value='others' />
//             </RadioGroup>
//             </FormControl>
//         </div>
//     )
// }

// export default RaddioButton
