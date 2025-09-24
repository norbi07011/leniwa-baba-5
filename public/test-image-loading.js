// Test image loading
console.log('Testing image loading...');

const testImages = [
    'Kotlet schabowy.jpg',
    'Żurek śląski1.jpg', 
    'Rosół z kury.jpg',
    'Pierogi z mięsem.jpg',
    'Barszcz czerwony.jpg'
];

testImages.forEach(imageName => {
    const img = new Image();
    img.onload = () => console.log(`✅ SUCCESS: ${imageName}`);
    img.onerror = () => console.error(`❌ FAILED: ${imageName}`);
    img.src = `/images/${imageName}`;
});