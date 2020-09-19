# Description

Custom class-validator for date values.

## usage:

```bash
class CreateBillDto {
  @IsString()
  productName: string,
  @IsDateBefore('paymentDate')
  orderDate: string,
  @IsDateBefore('orderDate')
  paymentDate: string,
}

// validate Object
const createBillDto = new bill();
const error = validate(createBillDto);
if (error.length > 0) {
  console.log(error)
}

```
