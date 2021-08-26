import { Typography, IconButton } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

export const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    
  },
});

export const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography component={"span"} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const useStyles = makeStyles((theme) => ({
  layerBody:{
    // backgroundColor:"#c5e4ed",margin:"2% 2%",
    // background: "linear-gradient(90deg, rgba(77,82,82,1) 16%, rgba(6,6,6,1) 50%, rgba(77,82,82,1) 72%, rgba(6,6,6,1) 97%)",
    background: "#252934",
    margin:"1%",
    
  },
  App: {
    marginLeft: "10%",
    marginRight: "10px",
  },
  column1: {
    padding: "0px",
    marginTop:"2%",
    height:"80%"
  },
  column2: {
    padding: "0px",
    width:"80%",
    height:"60%",
    margin:"1%",
    textAlign:"center",
  },
  column3: {
    width: "95%",
    padding: "0px",
    overflowY: "auto",
    overflowX:"hidden",
    textAlign:"center",

  },

  grid1: {},
  grid2: {},
  grid3: {},
  droppableColsource: {
    width: "95%",
    // backgroundColor: "#c5e4ed",
    backgroundColor: "#F1F3F7",
    padding: "10px 10px 0 10px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    maxHeight: "400px",
    overflowY: "auto",
    border: "1px solid black",
    marginLeft:"5%"
  },
  droppableColtarget: {
    width: "90%",
    // backgroundColor: "#c5e4ed",
    backgroundColor: "#F1F3F7",
    padding: "10px 10px 0 10px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    maxHeight: "500px",
    maxWidth: "100%",
    overflowY: "auto",
    border: "1px solid black",
    marginLeft:"15%"
  },
  body3: {
    width: "95%",
    backgroundColor: "#F1F3F7",
    padding: "10px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    maxHeight: "480px",
    overflowY: "auto",
    color:"#000",
    border:"1px solid black"
  },
  item: {
    textAlign: "center",
    marginBottom: "10px",

        // backgroundColor: "#adbce6",
        background:"#FFF",
        color: "#252934",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "7px",
    },
    item1selected: {
        textAlign: "center",
        marginBottom: "10px",

        backgroundColor: "#252934",
        
        color: "#FFF",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "7px 7px 7px 7px",
        width: "85%",
    },
    item1: {
        textAlign: "center",
        marginBottom: "10px",
        padding:"3px",
        background:"#FFF",
        // backgroundColor: "#adbce6",
        color: "#000",
        border: "1px solid black",
        borderRadius: "7px 7px 7px 7px",
        width: "85%",
        
        
      },
      item1Error: {
        textAlign: "center",
        marginBottom: "10px",
        padding:"3px",
        // backgroundColor: "rgb(115,194,251)",
        backgroundColor: "#252934",
        color: "#FFF",
        border: "1px solid black",
        borderRadius: "7px 7px 7px 7px",
        width: "85%",
        
      },
      cloneBtn :{
        float:"right",
        position:"relative",
        
        // height:"20%",
        // width:"20%",
        maxWidth:"30px",
        minWidth:"30px",
        maxHeight:"30px",
        minHeight:"30px",
      },
      errBtn :{
        float:"right",
        position:"relative",
        color:"#D00000",
        // height:"20%",
        // width:"20%",
        maxWidth:"30px",
        minWidth:"30px",
        maxHeight:"30px",
        minHeight:"30px",
      },
      inputFieldDesc:{
        fontSize:"80%",
        marginTop:"1px",
        fontWeight:"100",
        color:"#a2a4a8",
        marginLeft:"5%"
    },
    styleclose: {
        float: "right",
        height: "100%",
        cursor: "pointer",
        backgroundColor: "#FFC270",
        borderRadius: "0px 7px 7px 0px",
        border: "1px solid white",
        padding: "1px",
        marginBottom: "10px",
    },
    container: {
        position: "relative",
        paddingLeft: "10%",
    },
    heading: {
        textAlign: "center",
        fontSize: "120%",
        fontWeigth: "900",
        paddingBottom: "4px",
    },
    batch: {
        marginBottom: "10px",
        backgroundColor: "#f2f2f2",
        color: "black",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "7px",
        position: "relative",
        minHeight: "80px",
        overflow:"auto"
    },
    title: {
        float: "left",
        width: "45%",
        minHeight: "70px",
        textAlign: "center",
        transform: "translateY(30%)",
        overflow:"auto",
    },
    spancss: {
        marginLeft:"40%",
        fontSize:"120%"
        
    },
    innerpad:{
      width:"100%"
    },
    value: {
        float: "left",
        width: "45%",
        minHeight: "70px",
        transform: "translateY(15%)",
    },
    infoiconLayer: {
        float: "right",
        // width: "10%",
        textAlign: "center",
        transform: "translateY(50%)",
        // marginTop:"2%",
        marginLeft:"1%",
        
        cursor: "pointer",
    },
    infoiconPre: {
        float: "right",
        // width: "10%",
        textAlign: "center",
        // transform: "translateY(50%)",
        marginTop:"1%",
        cursor: "pointer",
    },
    infoiconHyper:{
      marginTop:"1%",
      cursor:"pointer"
    },
    input:{
      background:"#000",
    },

    delete: {
        width:"65%",
        backgroundColor: "#F1F3F7",
        padding: "10px",
        borderRadius: "7px",
        minHeight: "80px",
        minWeight: "60px",
        margin: "10px",
        textAlign: "center",
        marginLeft:"20%",
        marginRight:"20%",
        color:"#000",
        border:"1px solid black"

    },
    sel: {
        // width: "200px",
        // margin: "20px",
       width:"20%",
       margin:"1%",
    },
    _hyper: {
        width: "400px",
        margin: "20px",
        marginLeft: "30%",
    },
    save_plot: {
        marginTop: "25px",
        
    },
    action_btn: {
        float: "right",
        margin: "5px",
    },
    pad: {
        padding: "7px",
    },
    tryUsBtn:{
      marginLeft:"45%",
      marginBottom:"1%",
      background:"#5FCB8D",
      border:"1px solid black",
      fontWeight:"bold",
      color:"#000"

    },
    codeSnip:{
      width:"100%",
      overflowX:"hidden",
      filter:"blur(5px)"
    }
}));
