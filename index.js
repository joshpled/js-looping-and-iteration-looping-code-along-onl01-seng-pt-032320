function writeCards(name, gifts) {
    var array = []
    for (let i = 0; i < name.length; i++) {
      array.push(`Thank you, ${name[i]}, for the wonderful ${gifts} gift!`);
    }
    return array
  }

  function countDown(number){
      for (let count = number; count >= 0; count--) {
          console.log(count);
      }
  }
