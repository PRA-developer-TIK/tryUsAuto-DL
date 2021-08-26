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
        <div style={{overflowX:"auto",overflowY:"auto"}}>
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          
        >
          <DialogTitle id="error-dialog-title">
            Partial Code is generated!!!
          </DialogTitle>
          <DialogContent dividers>
            <div  className={classes.codeSnip} >
              <img src={codSnip} alt="code"/>
            </div>
            
          </DialogContent>
          <DialogActions style={{justifyContent: "center" }}>
            <Button
            style={{background:"#5FCB8D"}}
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

