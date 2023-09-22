CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE OR REPLACE FUNCTION gymapp.tri_exercise_history()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$begin
	IF (TG_OP = 'UPDATE') then
		if (new.weight > 0) then
			insert into gymapp.tb_exercise_weight_history(id, "exerciseId", "userId", weight, "workoutId")
			values ((select uuid_generate_v4()), 
		          old."exerciseId", 
		          (select tw."userId"
		             from tb_workout_exercise twe
		             join tb_workout_category twc
		               on twc.id = twe."workoutOnCategoryId"
		             join tb_workout tw
		               on tw.id = twc."workoutId"
		            where twe.id = old.id),
		          new.weight,
		          (select tw.id
                 from tb_workout_exercise twe
                 join tb_workout_category twc
                   on twc.id = twe."workoutOnCategoryId"
                 join tb_workout tw
                   on tw.id = twc."workoutId"
                where twe.id = old.id));
		end if;
	END IF;

RETURN NULL;
end$function$
;

