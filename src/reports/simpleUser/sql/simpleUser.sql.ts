export const getSimpleUserSQL = ({ activeFilter }) => `
select tu."name",
	     tu.email,
	     tu.cpf,
	     to_char(tu."birthDate", 'dd/mm/yyyy') "birthDate",
	     tu.address_street "street",
	     tu.address_number "number",
	     tu.address_zip_code "zipCode",
	     tu.address_district "district",
	     tu.address_city "city",
	     tu.address_state "state",
	     coalesce(tu.address_complement, '') "complement",
	     case when tu.active then 'SIM' else 'NÃO' end "active"
  from tb_user tu
 where (('${activeFilter}' = '0')
    or ('${activeFilter}' = '1' and tu.active = true)
    or ('${activeFilter}' = '2' and tu.active = false))
order by 1 asc
`;
