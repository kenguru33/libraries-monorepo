# Description

Custom class-validator for date values.

## usage

```bash
class Bill {
  productName: string,
  @Datebefore('paymentDate')
  orderDate: string,
  paymentDate: string,

}

const bill = new bill(createBillDto: CreateBillDto);
const error = validate(bill);
if (error.length > 0) {
  console.log(error)
}

```
