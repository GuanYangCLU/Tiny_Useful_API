function getLeetFileName() {
  if ($('#curOutput').val() === $('#leetInput').val()) {
    console.log(1);
    console.log($('#curOutput').val());
    console.log($('#leetInput').val());
    $('#leetOutput').append(
      '<label id="curOutput">' +
        leetFileName($('#leetInput').val()) +
        '</label>'
    );
  } else if ($('#leetInput').val() !== $('#curOutput').val()) {
    console.log(2);
    console.log($('#curOutput').val());
    console.log($('#leetInput').val());
    $('#curOutput').remove();
    $('#curOutput').remove();
    $('#leetOutput').append(
      '<label id="curOutput">' +
        leetFileName($('#leetInput').val()) +
        '</label>'
    );
  }
}

const leetFileName = input => {
  //   const output = input.replace(/ /g, '_').slice()
  const fileForm = ['.py', '.js', '.go', '.java'];
  let arr = input.split(' ');
  let len = 5 - arr[0].length;
  for (let i = 0; i < len; i++) {
    arr[0] = '0' + arr[0];
  }
  arr[0] = arr[0].slice(0, 4);
  const output = arr.join('_');
  for (let i = 0; i < fileForm.length; i++) {
    console.log(output + fileForm[i]);
  }
  return output;
};

function resetLeet() {
  $('#leetInput').val('');
  $('#curOutput').html('');
}
