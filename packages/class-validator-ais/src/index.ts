import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsMmsi() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isMmsi',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const pattern: RegExp = new RegExp('^\\d{9}$');
          return pattern.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a nine digit string value`;
        },
      },
    });
  };
}

export function IsCog() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCog',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value >=0 && value <=360
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a value between 0 and 360`;
        },
      },
    });
  };
}

export function IsSog() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isSog',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value >=0 && value <=102.2
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a value between 0 and 360`;
        },
      },
    });
  };
}

// import {
//   ValidationOptions,
//   registerDecorator,
//   ValidationArguments,
// } from 'class-validator';

// export function IsMmsi(
//   property: string,
//   validationOptions?: ValidationOptions
// ) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       name: 'isMmsi',
//       target: object.constructor,
//       propertyName: propertyName,
//       constraints: [property],
//       options: validationOptions,
//       validator: {
//         validate(value: any) {
//           const pattern: RegExp = new RegExp('^\\d{9}$');
//           return pattern.test(value);
//         },
//         defaultMessage(args: ValidationArguments) {
//           // here you can provide default error message if validation failed
//           const [relatedPropertyName] = args.constraints;
//           const relatedValue = (args.object as any)[relatedPropertyName];
//           return `${
//             args.property
//           } ($value) must be a nine digit string value ${[
//             relatedPropertyName,
//           ]} (${relatedValue})`;
//         },
//       },
//     });
//   };
// }

// export function IsCog(property: string, validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       name: 'isCog',
//       target: object.constructor,
//       propertyName: propertyName,
//       constraints: [property],
//       options: validationOptions,
//       validator: {
//         validate(value: any, args: ValidationArguments) {
//           const [relatedPropertyName] = args.constraints;
//           const relatedValue = (args.object as any)[relatedPropertyName];
//           return value >= 0 && value <= 360;
//         },
//         defaultMessage(args: ValidationArguments) {
//           // here you can provide default error message if validation failed
//           const [relatedPropertyName] = args.constraints;
//           const relatedValue = (args.object as any)[relatedPropertyName];
//           return `${args.property} ($value) must be a number between 0 and 360`;
//         },
//       },
//     });
//   };
// }

// export function IsSog(property: string, validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       name: 'isSog',
//       target: object.constructor,
//       propertyName: propertyName,
//       constraints: [property],
//       options: validationOptions,
//       validator: {
//         validate(value: any, args: ValidationArguments) {
//           const [relatedPropertyName] = args.constraints;
//           const relatedValue = (args.object as any)[relatedPropertyName];
//           return value >= 0 && value <= 102.2;
//         },
//         defaultMessage(args: ValidationArguments) {
//           // here you can provide default error message if validation failed
//           const [relatedPropertyName] = args.constraints;
//           const relatedValue = (args.object as any)[relatedPropertyName];
//           return `${args.property} ($value) must be a number between 0 and 102.2`;
//         },
//       },
//     });
//   };
// }
