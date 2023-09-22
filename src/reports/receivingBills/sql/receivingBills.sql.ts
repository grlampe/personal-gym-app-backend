export const getReceivingBillsSQL = ({ isPaidFilter, userId }) => `
select g."name",
	   g."description",
	   g."amount",
	   g."expirationAt",
	   g."paidAt",
	   g."isPaid"
  from (select tu.id "userId",
  			   tu."name",
			   trb.description,
			   trb.amount,
			   to_char(trb.expiration_at, 'dd/mm/yyyy') "expirationAt",
			   to_char(trb.paid_at, 'dd/mm/yyyy') "paidAt",
			   case when trb.paid_at is not null then 'SIM' else 'NÃO' end "isPaid"
		  from tb_receiving_bills trb
		  join tb_user tu
		    on tu.id = trb."userId" ) g
 where (('${isPaidFilter}' = '0')
    or ('${isPaidFilter}' = '1' and g."isPaid" = 'SIM')
    or ('${isPaidFilter}' = '2' and g."isPaid" = 'NÃO'))
   and ('${userId}' = '0')
    or ('${userId}' = g."userId")
order by 6, 4, 1 asc
`;
