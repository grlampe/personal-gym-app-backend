export const getBodyMeasurementSQL = ({
  userId,
  workoutId,
  startDate,
  endDate,
}) => `
select tbm.description,
	   tbm.height,
	   tbm.weight,
	   coalesce(tw.description, 'SEM TREINO VINCULADO') as "workoutDescription",
	   tbm."chestBust",
	   tbm."leftArm",
	   tbm."rightArm",
	   tbm.abdomen,
	   tbm.waist,
	   tbm.hips,
	   tbm."leftThigh",
	   tbm."rightThigh",
		 to_char(cast(tbm.created_at  - interval '3h' as date), 'dd/mm/yyyy')  "createdAt"
  from tb_body_measurement tbm
  left join tb_workout tw
    on tw.id = tbm."workoutId"
 where tbm."userId"  = '${userId}'
   and ((('${workoutId}' = '0') and (cast(tbm.created_at  - interval '3h' as date) between '${startDate}' and '${endDate}'))
    or ('${workoutId}' = tbm."workoutId"))
order by cast(tbm.created_at  - interval '3h' as date)
`;
