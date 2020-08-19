let D = null;
let x1 = null;
let x2 = null;

// function discriminant(a, b, c) {
//     D = b ** 2 - 4 * a * c;
//     if (D > 0) {
//         x1 = (-b + Math.sqrt(D))/(2*a);
//         x2 = (-b - Math.sqrt(D))/(2*a);
//         alert('x1 = '+x1+'   x2 = '+x2);
//     }
//     else if (D === 0) {
//         x1 = (-b)/(2*a);
//         alert('x1 = '+x1);
//     }
//     else {
//         alert('Невозможно вычислить значение, так как дискриминант меньше нуля');
//     }
// }

// discriminant();

function discriminant(a, b, c) {
    D = b ** 2 - 4 * a * c;
    switch (true) {
        case D > 0:
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            alert('x1 = ' + x1 + '   x2 = ' + x2);
            break;
        case D === 0:
            x1 = (-b) / (2 * a);
            alert('x1 = ' + x1);
            break;
        default:
            alert('Невозможно вычислить значение, дискриминант меньше нуля');
    }
}

discriminant();