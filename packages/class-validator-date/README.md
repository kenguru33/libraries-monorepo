# Description

Custom class-validator for date values. Do validate before and after date value.

## usage:

```bash
class CreateBillDto {
  @IsString()
  productName: string,
  @IsDateBefore('paymentDate')
  orderDate: string,
  @IsDateAfter('orderDate')
  paymentDate: string,
  @isDateBefore('1972-03-28T23:11:00')
  birth: string;
}

// validate Object
const createBillDto = new CreateBillDto();
const error = await validate(createBillDto);
if (error.length > 0) {
  console.log(error)
}

```
