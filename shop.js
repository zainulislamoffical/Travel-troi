let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});  





















let preveiwContainer1 = document.querySelector('.products-preview1');
let previewBox1= preveiwContainer1.querySelectorAll('.preview1');

document.querySelectorAll('.shopc').onclick = () =>{
    preveiwContainer1.style.display = 'flex';
    let name = product.getAttribute('data-name');
    
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
   
  };


previewBox1.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer1.style.display = 'none';
  };
});