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
const creatAisdataDto = new AisdataDto();
const error = await validate(createAisdataDto);
if (error.length > 0) {
  console.log(error)
}
```
