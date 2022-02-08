export class ProfessorModel {
  publisher_id;
  first_name = '';
  last_name = '';
  fullName;
  email;
  province_state;
  city_town;
  street;
  alley;
  plaque_number;
  floor_number;
  unit_number;
  zipcode;
  constructor(element) {
    this.publisher_id = element?.publisher_id;
    this.first_name = element?.first_name;
    this.last_name = element?.last_name;
    this.fullName = this.first_name + ' ' + this.last_name;
    this.email = element?.email;
    this.province_state = element?.province_state;
    this.city_town = element?.city_town;
    this.street = element?.street;
    this.alley = element?.alley;
    this.plaque_number = element?.plaque_number;
    this.floor_number = element?.floor_number;
    this.unit_number = element?.unit_number;
    this.zipcode = element?.zipcode;
  }
}
