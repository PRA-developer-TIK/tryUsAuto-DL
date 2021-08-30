import { useCallback } from "react";
import {
    Dialog,Button
  } from "@material-ui/core";

import {
  useStyles,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "../assets/stylesGrey";


import codSnip from "../assets/codeSnip.PNG";






const  TryUsDialog = ({openModal,closeModal})=>{

    const handleCloseModal=useCallback(() =>{
        closeModal(false);

    },[closeModal]);

    const classes=useStyles();


    return(
        <div >
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          style={{height:"80%",marginTop:"5%",width:"100%",textAlign:"center",fontWeight:"bold"}}
          
        >
          <DialogTitle id="error-dialog-title"  >
             Code  generated!!!
          </DialogTitle>
          <DialogContent dividers >
            <div  className={classes.codeSnip} >
              <div>
                <img src={codSnip} alt="code"/>
              </div>
              
            </div>
            
          </DialogContent>
          <DialogActions style={{justifyContent: "center" }}>
            <Button
            style={{background:"#252934",color:"#FFFFFF"}}
              variant="contained"

              onClick={handleCloseModal}
              
            >
              REGISTER!
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )

}


export default TryUsDialog;

