var calPoints = function(ops) {
    let arr = [];
    let opera = {
      "+": function() {
        let total = arr.length > 1 ? Number(arr[arr.length - 1]) + Number(arr[arr.length -2]): arr[0];
        arr.push(total);
      },
      "D": function() {
        arr.length && arr.push(arr[arr.length - 1] * 2)
      },
      "C": function() {
        arr.pop();
      },
      'in': function(item) {
        arr.push(item);
      }
    };
  
    ops.forEach((item) => {
      if (item in opera) {
        opera[item]();
      } else {
        opera.in(item);
      }
    })
  
    return arr.reduce((total, num) =>  Number(total) + Number(num))
  
  };
  