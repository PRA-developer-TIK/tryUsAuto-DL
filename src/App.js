import { useState } from 'react';
import './App.css';
import LayerTab from './components/LayerTab';
import jsondata from "./assets/KerasLayersJson";
import _ from "lodash";
import {validate_layers} from "./Validation/Validation";
// import { useStyles } from "./assets/stylesWhite";
// import { useStyles } from "./assets/stylesGrey";
import { useStyles } from "./assets/stylesBlack";


function App() {

  const classes = useStyles();

  const [components, setcomponents] = useState([]);
  const [selected_layer_type, setselected_layer_type] = useState("");
  const [selected_layer, setselected_layer] = useState(-1);
  const [invalidLayerIndices,setInvalidLayerIndices]=useState(new Set());
  const [validLayerIndices,setValidLayerIndices]=useState([0,1,2,3,4,5,6,7,8,9]);

  const save_value = (prop) => (event) => {
    var param = prop;
    var index = selected_layer;
    const pervstate = Object.assign([], components);
    pervstate[index][param]["value"] = event.target.value;
    console.log("prop is ", prop);
    console.log(event.target.value);
    console.log(components);
    setcomponents(pervstate);
  };

  const handleCloneLayer = (layer) => {
    // handleChangetabs();
    
      //getting source names of all layers 
        const list_names_of_source=Object.keys(jsondata);
        let source_index;

        //where to place layer in UI
        let destination_index=Number(layer.id[layer.id.length-1])+1;
        // console.log("destination index  is ",destination_index);
        

    
        //finding layer in source array for id framing
        for(let i=0;i<list_names_of_source.length;i++)
        {
          if(layer.name === list_names_of_source[i] )
          {
            source_index=i;
            break;
          }
        }

    
    //cloning the layer
    let clonedLayer = _.cloneDeep(layer);

    //assigning new id and name
    clonedLayer["id"] = `${layer.name}-${source_index}-${destination_index}`;
    clonedLayer["name"] = list_names_of_source[source_index];

    //inserting layer just below the layer to be cloned
    components.splice(destination_index, 0, clonedLayer);

    for (let i = 0; i < components.length; i++) {
      components[i]["id"] = components[i]["id"] + i;
      if (i === 0) {
        if (
          !("input_size" in components[i]) ||
          !("input_shape" in components[i])
        ) {
          components[i]["input_shape"] = {
            Example: [200, 200, 3],
            Default: "NA",
            Required: 1,
            Datatype: "Tuple",
            Options: [],
            Description: "Input shape for the first layer",
          };
        }
      } else {
        try {
          delete components[i]["input_shape"];
        } catch (err) {}
      }
      // console.log("inside loop id",components[i]["id"]);
    }
    let some_dic = _.cloneDeep(components);
    setcomponents(some_dic);
  };


  const showdetails = (element) => {
    setselected_layer_type(element);
    console.log("selected layer type is ",selected_layer_type);

    var ele = components;
    var index = ele.lastIndexOf(element);
    console.log("index is ",index);

    setselected_layer(index);
  };



  const handleDragEnd = ({ destination, source }) => {
    let tempArr=_.cloneDeep(components);
    console.log("components before",components);
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    if (destination.droppableId === "source") {
      console.log("dropping in  source",tempArr);
      return;
    }
    
    if (
      destination.droppableId === "delete" &&
      source.droppableId === "target"
    ) {
      console.log("deleting from target");
      const element = tempArr[source.index];
      
      
      var temp = tempArr.filter((item) => item !== element);
      tempArr=temp;
      
    
      setselected_layer(-1);
      setselected_layer_type("");
      
    }
    if (
      destination.droppableId === "target" &&
      source.droppableId === "target"
    ) {

      let dragLayerIsSelcted=false;
      console.log('tempArr["id"] selected_layer_type["id"]',tempArr[source.index]["id"],selected_layer_type["id"]);

      if(tempArr[source.index]["id"]===selected_layer_type["id"]){

        dragLayerIsSelcted=true;
      }
     
      


      tempArr.splice(destination.index,0,tempArr.splice(source.index, 1)[0]);
      // console.log("source and des index are",source.index,destination.index);

      if(dragLayerIsSelcted)
      {
        setselected_layer_type(tempArr[destination.index]);
        setselected_layer(destination.index);
        console.log("selected_layer_type on drag and id is  ",selected_layer_type,selected_layer_type["id"]); 
      }
      else
      {
        setselected_layer_type("");
        setselected_layer(-1);

      }

      // console.log("compinents after splice is ",components);
      for (var i = 0; i < tempArr.length; i++) {
        tempArr[i]["id"] = tempArr[i]["id"] + i;
        if (i === 0) {
          if (
            !("input_size" in tempArr[i]) ||
            !("input_shape" in tempArr[i])
          ) {
            tempArr[i]["input_shape"] = {
              Example: [200, 200, 3],
              Default: "NA",
              Required: 1,
              Datatype: "Tuple",
              Options: [],
              Description: "Input shape for the first layer",
            };
          }
        } else {
          try {
            delete tempArr[i]["input_shape"];
          } catch (err) {}
        }
      }
      // setcomponents(components);
    }
    if (
      destination.droppableId === "target" &&
      source.droppableId === "source"
    ) {
      console.log("dropping from source to target");


      const list_names_of_source = Object.keys(jsondata);
      
      const temp = jsondata[list_names_of_source[source.index]];
      
      var dic = _.cloneDeep(temp);
     

      
      dic["id"] = `${list_names_of_source[source.index]}-${source.index}-${
        destination.index
      }`;
      
      dic["name"] = list_names_of_source[source.index];

     
      tempArr.splice(destination.index, 0, dic);

      for (i = 0; i < tempArr.length; i++) {
        tempArr[i]["id"] = tempArr[i]["id"] + i;
        
        if (i === 0) {
          if (
            !("input_size" in tempArr[i]) ||
            !("input_shape" in tempArr[i])
          ) {
            tempArr[i]["input_shape"] = {
              Example: [200, 200, 3],
              Default: "NA",
              Required: 1,
              Datatype: "Tuple",
              Options: [],
              Description: "Input shape for the first layer",
            };
          }
        } else {
          try {
            delete tempArr[i]["input_shape"];
          } catch (err) {}
        }
      }

    }
    
 

    
    const {invalidIndices,validIndices}=validate_layers( tempArr);
    console.log("val res is",invalidIndices,validIndices);
    setInvalidLayerIndices(invalidIndices);
    setValidLayerIndices(validIndices);

    setcomponents(tempArr);

  };



  return (
    <div className={classes.layerBody}>
    <LayerTab
        
        handleDragEnd={handleDragEnd}
        jsondata={jsondata}
        components={components}
        selected_layer={selected_layer}
        selected_layer_type={selected_layer_type}
        showdetails={showdetails}
        handleCloneLayer={handleCloneLayer}
        invalidLayerIndices={invalidLayerIndices}
        validLayerIndices={validLayerIndices}
        save_value={save_value}
        
    />
    </div>
  );
}

export default App;
