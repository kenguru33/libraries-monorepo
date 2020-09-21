# Description

Custom class-validator for automatic identification system (ais)

## usage:

```bash
class AisdataDto {
  @IsMmsi()
  mmsi: string

  @IsCog()
  heading: number

  @IsSog()
  speed: number,
}

// validate Object
const creatAisDto = new AisdataDto()
const error = await validate(createBillDto);
if (error.length > 0) {
  console.log(error)
}
```
