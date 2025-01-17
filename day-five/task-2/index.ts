interface banknoteBreakdown {
    [denomination: number]: number;
};

function getOptimalBanknotes(sum: number): banknoteBreakdown {
    if (sum <= 0 || !Number.isInteger(sum)) {
        throw new Error("Сумма должна быть положительным целым числом.");
    }

    const denominations = [100, 50, 10, 5, 2, 1];
    const result: banknoteBreakdown = {};

    let i = 0;
    while (sum > 0 && i < denominations.length) {
        const denomination = denominations[i];
        const count = Math.floor(sum / denomination);
        if (count > 0) {
            result[denomination] = count;
            sum -= count * denomination;
        }
        i++;
    }

    return result;
}


console.log(getOptimalBanknotes(1357));
