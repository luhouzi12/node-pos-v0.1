function printReceipt(items)
{
    var barcodeArr = new Array();
    var nameArr = new Array();
    var quantityArr = new Array();
    var priceArr = new Array();
    var unitArr = new Array();

    for(i = 0; i < items.length; i++)
    {
        var obj = items[i];
        var barcodeIndex;
        //console.log('item.barcode is ' + obj.Barcode);
        if(!barcodeArr.includes(obj.Barcode))
        {
            barcodeIndex = barcodeArr.push(obj.Barcode) - 1;
            nameArr[barcodeIndex] = obj.Name;
            priceArr[barcodeIndex] = obj.Price;
            quantityArr[barcodeIndex] = 1;
            if(obj.Unit == 'a')
            {
                unitArr[barcodeIndex] = '';
            }
            else
            {
                unitArr[barcodeIndex] = obj.Unit;
            }
        }
        else
        {
            barcodeIndex = barcodeArr.indexOf(obj.Barcode);
            quantityArr[barcodeIndex]++;
        }
    }
    var totalPrice = 0;
    result = '***<store earning no money>Receipt ***\n';
    for(j = 0; j < barcodeArr.length; j++)
    {
        result += 'Name: ' + nameArr[j] + ', Quantity: ' + quantityArr[j];
        if(unitArr[j] == '')
        {

        }
        else if(quantityArr[j] > 1)
        {
            result += ' ' + unitArr[j] + 's';
        }
        else
        {
            result += ' ' + unitArr[j] + ' ';
        }
        result += ', Unit price: ' + priceArr[j] + '.00 (yuan), Subtotal: ' + priceArr[j] * quantityArr[j]
        + '.00 (yuan)\n';
        totalPrice += priceArr[j] * quantityArr[j];
    }
    result += '----------------------\n' +  'Total: ' + totalPrice + '.00 (yuan)\n' +
    '**********************\n';
    return result;
};
var items = [
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00

    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000004',
        Name: 'Battery',
        Unit: 'a',
        Price: 2.00
    }
];

console.log(printReceipt(items));
//export {printReceipt};