CREATE OR REPLACE FUNCTION gymapp.tri_exercise_history()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$begin
	IF (TG_OP = 'UPDATE') then
		if (new.weight > 0) then
			insert into gymapp.tb_exercise_weight_history(id, "exerciseId", "userId", weight)
			values ((select uuid_generate_v4()), 
              old."exerciseId", 
              (select tw."userId"
                 from tb_workout_exercise twe
                 join tb_workout_category twc
                   on twc.id = twe."workoutOnCategoryId"
                 join tb_workout tw
                   on tw.id = twc."workoutId"
                where twe.id = old.id),
              new.weight);
		end if;
	END IF;

RETURN NULL;
end$function$
;

create trigger tri_exercise_add_history after
update
    of weight on
    gymapp.tb_workout_exercise for each row execute function gymapp.tri_exercise_history()