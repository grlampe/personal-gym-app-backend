export class UpdateUserDTO {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly cpf: string;
  readonly birthDate: Date;
  readonly addressStreet: string;
  readonly addressNumber: string;
  readonly addressZipCode: string;
  readonly addressDistrict: string;
  readonly addressCity: string;
  readonly addressState: string;
  readonly addressComplement: string;
  readonly active: boolean;
}
