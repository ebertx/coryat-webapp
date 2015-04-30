var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];

var CatBox = React.createClass({displayName: "CatBox",
    render: function() {
        return (
            React.createElement("div", null, 
                 
                    this.props.items.map(function(m, index) {
                        return {m};
                    })
                
            )
        );
    }
});


React.render(
  React.createElement("h2", null, "Coryat Scorer"),
  document.getElementById('example')  
);

React.render(
  React.createElement(CatBox, {items:  cats }),
  document.getElementById('scoreBoard')
);

// React.render(
//     {
//         cats.map(function(category) {
//             return <div class="scoreBox">{category}</div>
//         })
//     },
//     document.getElementByID('categories')
// );