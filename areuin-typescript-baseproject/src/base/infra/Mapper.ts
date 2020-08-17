export interface Mapper<T, TDTO> {
  toDTO(t: T): TDTO;
  fromDTO(DTO: TDTO): T;
}
