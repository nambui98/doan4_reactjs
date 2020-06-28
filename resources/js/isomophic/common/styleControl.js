export default function styleControl(type, modalType) {
  if (type === 3) {
    return {
      backgroundColor: "#af1921",
      color: "#FFFFFF",
      borderRadius: "6px"
    };
  } if (type === 2) {
    return {
      display: "none",
    };
  } else {
    return {
      backgroundColor: "#2d3446",
      color: "#FFFFFF",
      borderRadius: "6px",
      display: modalType === "view" ? "none" : ""
    };
  }
}

/*

export default function styleColorByStatus(status, userRoleAddress,roleAddress) {
  if(roleAddress=="A" && userRoleAddress=="A")
  {
    if(status==1){
      return {
        backgroundColor: "yellow",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==2){
      return {
        backgroundColor: "green",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==5){
      return {
        backgroundColor: "red",
        color: "#FFFFFF",
        borderRadius: "6px"
      };
    }
  }
  if(roleAddress=="B" && userRoleAddress=="B")
  {
    if(status==1){
      return {
        backgroundColor: "yellow",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==2){
      return {
        backgroundColor: "green",
        color: "#FFFFFF",
        borderRadius: "6px",
      };
    }
    if(status==5){
      return {
        backgroundColor: "red",
        color: "#FFFFFF",
        borderRadius: "6px"
      };
    }
  }
  else{

  }
}

*/