export const getWorkoutSQL = ({ userId, workoutId, exerciseId }) => `
select tu."name",
	   tw.description "workout",
	   te."name" "exercise",
	   tewh.weight,
	   to_char(tewh.created_at, 'dd/mm/yyyy') "createdAt"
  from tb_exercise_weight_history tewh
  join tb_workout tw
    on tw.id = tewh."workoutId"
  join tb_exercise te
    on te.id = tewh."exerciseId"
  join tb_user tu
    on tu.id = tewh."userId"
 where '${userId}' = tu.id
   and ('${workoutId}' = '0'
    or '${workoutId}' = tw.id)
   and ('${exerciseId}' = '0'
    or '${exerciseId}' = te.id)
order by 1, 5, 2, 3 asc
`;
