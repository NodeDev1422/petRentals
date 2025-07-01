// src/auth/dto/jwt-payload.dto.ts
import { Role } from '../../common/enums/role.enum';

export interface JwtPayload {
  sub: number;
  email: string;
  role: Role;
}
