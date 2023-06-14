import { useState } from "react";
import { MdStarRate } from "react-icons/md";

const colors = {
    orange: "green",
    grey: "#a9a9a9"
    
};

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
  
  };
function Star() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <MdStarRate
              key={index}
              size={26}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          )
        })}
      </div>     
    </div>
  );
};



export default Star;