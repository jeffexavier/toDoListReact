function criaTamanhos(a, b) {
    while (a < 5000) {
        console.log(a);
        const c = a + b;
        a = b;
        b = c;
    }
}

criaTamanhos(10, 10);

// 10+10, 20+10, 30+20
// e + e, e+a
