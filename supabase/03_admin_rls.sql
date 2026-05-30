-- STEP 3 — Run after 01_create.sql
-- Allows logged-in admin (Nanami) to manage readings

CREATE POLICY "Admin select readings"
ON public.readings
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admin insert readings"
ON public.readings
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Admin update readings"
ON public.readings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Admin delete readings"
ON public.readings
FOR DELETE
TO authenticated
USING (true);

-- Authenticated users can upload chart images
CREATE POLICY "Admin upload charts"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'charts');

CREATE POLICY "Admin update charts"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'charts')
WITH CHECK (bucket_id = 'charts');

CREATE POLICY "Admin delete charts"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'charts');
