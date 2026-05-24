-- Demo seed data for the initial AgriNexus tenant.
-- Password hash is a placeholder. Replace with a real Argon2/bcrypt hash in production.

insert into tenants (id, name, slug)
values ('00000000-0000-0000-0000-000000000001', 'AgriNexus Demo', 'agrinexus-demo');

insert into countries (id, tenant_id, name, iso_code, latitude, longitude, zoom, status)
values
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Nigeria', 'NG', 9.082000, 8.675300, 6, 'Active'),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Kenya', 'KE', 0.023600, 37.906200, 6, 'Active'),
  ('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Egypt', 'EG', 26.820600, 30.802500, 6, 'Scale'),
  ('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'DRC', 'CD', -2.879700, 23.656000, 5, 'Pilot');

insert into roles (tenant_id, code, name, description)
values
  ('00000000-0000-0000-0000-000000000001', 'admin', 'Administrator', 'Full tenant administration.'),
  ('00000000-0000-0000-0000-000000000001', 'coordinator', 'Coordinator', 'Operations coordinator.'),
  ('00000000-0000-0000-0000-000000000001', 'field_agent', 'Field Agent', 'Field operations user.'),
  ('00000000-0000-0000-0000-000000000001', 'health_operator', 'Health Operator', 'Telehealth and intake user.');

insert into users (id, tenant_id, email, display_name, password_hash, preferred_country_id)
values (
  '20000000-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000001',
  'demo@agrinexus.org',
  'Demo Coordinator',
  'replace-with-real-password-hash',
  '10000000-0000-0000-0000-000000000001'
);

insert into user_roles (user_id, role_id)
select '20000000-0000-0000-0000-000000000001', id
from roles
where tenant_id = '00000000-0000-0000-0000-000000000001' and code = 'coordinator';

insert into program_metrics (tenant_id, country_id, patients, facilities, risk_level, heat_index_c, queue_status, outcome_rate, adoption_rate, safety_override_rate, data_quality_rate)
values
  ('00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 5600, 18, 'Moderate', 38, 'Representative available', 14, 67, 3.8, 91),
  ('00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 4300, 16, 'Elevated', 31, 'Representative available', 12, 71, 3.1, 93),
  ('00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 4700, 22, 'Low', 41, '1 caller ahead', 16, 74, 2.1, 95),
  ('00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', 3800, 14, 'High', 29, '2 callers ahead', 10, 54, 5.4, 88);

insert into routes (id, tenant_id, country_id, name, corridor_type, color)
values
  ('30000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'West Africa Corridor', 'trade', '#1c8c63'),
  ('30000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 'East Africa Corridor', 'trade', '#176fba'),
  ('30000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 'North Africa Corridor', 'trade', '#d3952f'),
  ('30000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', 'Central Africa Corridor', 'trade', '#74533e');

insert into route_checkpoints (route_id, sequence, name, checkpoint_type)
values
  ('30000000-0000-0000-0000-000000000001', 1, 'Lagos Port', 'port'),
  ('30000000-0000-0000-0000-000000000001', 2, 'Ibadan Hub', 'hub'),
  ('30000000-0000-0000-0000-000000000001', 3, 'Abuja Exchange', 'exchange'),
  ('30000000-0000-0000-0000-000000000001', 4, 'Kano Dry Port', 'port'),
  ('30000000-0000-0000-0000-000000000002', 1, 'Nairobi Hub', 'hub'),
  ('30000000-0000-0000-0000-000000000002', 2, 'Eldoret Node', 'node'),
  ('30000000-0000-0000-0000-000000000002', 3, 'Nakuru Gateway', 'gateway'),
  ('30000000-0000-0000-0000-000000000002', 4, 'Mombasa Port', 'port'),
  ('30000000-0000-0000-0000-000000000003', 1, 'Cairo Gateway', 'gateway'),
  ('30000000-0000-0000-0000-000000000003', 2, 'Suez Link', 'link'),
  ('30000000-0000-0000-0000-000000000003', 3, 'Minya Node', 'node'),
  ('30000000-0000-0000-0000-000000000003', 4, 'Aswan Border', 'border'),
  ('30000000-0000-0000-0000-000000000004', 1, 'Kinshasa Port', 'port'),
  ('30000000-0000-0000-0000-000000000004', 2, 'Mbandaka Transfer', 'transfer'),
  ('30000000-0000-0000-0000-000000000004', 3, 'Goma Node', 'node'),
  ('30000000-0000-0000-0000-000000000004', 4, 'Kigali Link', 'link');

update route_checkpoints
set latitude = case name
    when 'Lagos Port' then 6.4561
    when 'Ibadan Hub' then 7.3775
    when 'Abuja Exchange' then 9.0765
    when 'Kano Dry Port' then 12.0022
    when 'Nairobi Hub' then -1.2921
    when 'Eldoret Node' then 0.5143
    when 'Nakuru Gateway' then -0.3031
    when 'Mombasa Port' then -4.0435
    when 'Cairo Gateway' then 30.0444
    when 'Suez Link' then 29.9668
    when 'Minya Node' then 28.0871
    when 'Aswan Border' then 24.0889
    when 'Kinshasa Port' then -4.4419
    when 'Mbandaka Transfer' then 0.0487
    when 'Goma Node' then -1.6585
    when 'Kigali Link' then -1.9441
  end,
  longitude = case name
    when 'Lagos Port' then 3.3947
    when 'Ibadan Hub' then 3.9470
    when 'Abuja Exchange' then 7.3986
    when 'Kano Dry Port' then 8.5920
    when 'Nairobi Hub' then 36.8219
    when 'Eldoret Node' then 35.2698
    when 'Nakuru Gateway' then 36.0800
    when 'Mombasa Port' then 39.6682
    when 'Cairo Gateway' then 31.2357
    when 'Suez Link' then 32.5498
    when 'Minya Node' then 30.7618
    when 'Aswan Border' then 32.8998
    when 'Kinshasa Port' then 15.2663
    when 'Mbandaka Transfer' then 18.2603
    when 'Goma Node' then 29.2205
    when 'Kigali Link' then 30.0619
  end
where route_id in (
  '30000000-0000-0000-0000-000000000001',
  '30000000-0000-0000-0000-000000000002',
  '30000000-0000-0000-0000-000000000003',
  '30000000-0000-0000-0000-000000000004'
);

insert into facilities (id, tenant_id, country_id, name, facility_type, latitude, longitude, status, metadata)
values
  ('40000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'Lagos Care and Produce Hub', 'clinic-logistics', 6.5244, 3.3792, 'active', '{"beds": 24, "coldStorageTons": 18, "telehealthRooms": 3}'),
  ('40000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'Abuja Workforce Training Center', 'training', 9.0765, 7.3986, 'active', '{"classrooms": 6, "weeklyLearners": 140}'),
  ('40000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 'Nairobi Telehealth Hub', 'clinic', -1.2921, 36.8219, 'active', '{"beds": 18, "telehealthRooms": 4}'),
  ('40000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 'Mombasa Export Quality Lab', 'quality-lab', -4.0435, 39.6682, 'active', '{"inspectors": 12, "dailyLots": 80}'),
  ('40000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 'Cairo Market Intelligence Desk', 'operations', 30.0444, 31.2357, 'active', '{"analysts": 10, "marketFeeds": 7}'),
  ('40000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 'Aswan Field Clinic', 'clinic', 24.0889, 32.8998, 'active', '{"beds": 12, "heatResponseKits": 48}'),
  ('40000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', 'Kinshasa Intake Center', 'clinic', -4.4419, 15.2663, 'active', '{"beds": 16, "mobileTeams": 5}'),
  ('40000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', 'Goma Resilience Depot', 'logistics', -1.6585, 29.2205, 'active', '{"fieldKits": 220, "satelliteLinks": 2}');

insert into courses (tenant_id, code, title, track, readiness_points)
values
  ('00000000-0000-0000-0000-000000000001', 'digital-foundations', 'Digital Foundations', 'Digital', 8),
  ('00000000-0000-0000-0000-000000000001', 'agritech-fundamentals', 'Agritech Fundamentals', 'Field', 10),
  ('00000000-0000-0000-0000-000000000001', 'telehealth-support', 'Telehealth Support', 'Care', 9),
  ('00000000-0000-0000-0000-000000000001', 'cold-chain-operations', 'Cold Chain Operations', 'Trade', 12),
  ('00000000-0000-0000-0000-000000000001', 'route-safety-response', 'Route Safety Response', 'Logistics', 11),
  ('00000000-0000-0000-0000-000000000001', 'ai-operator-review', 'AI Operator Review', 'Intelligence', 13);

insert into learner_profiles (user_id, readiness_score, quiz_score)
values ('20000000-0000-0000-0000-000000000001', 32, 0);

insert into candidate_profiles (user_id, earnings_estimate)
values ('20000000-0000-0000-0000-000000000001', 180);

insert into workforce_roles (id, tenant_id, title, level, country_id, min_readiness, status)
values
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Telehealth Intake Operator', 'Level 1', '10000000-0000-0000-0000-000000000001', 35, 'open'),
  ('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Route Checkpoint Coordinator', 'Level 2', '10000000-0000-0000-0000-000000000002', 45, 'open'),
  ('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Cold Chain Quality Associate', 'Level 2', '10000000-0000-0000-0000-000000000003', 50, 'open'),
  ('50000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Mobile Resilience Field Lead', 'Level 3', '10000000-0000-0000-0000-000000000004', 60, 'open');

insert into job_applications (candidate_profile_id, workforce_role_id, status)
select cp.id, '50000000-0000-0000-0000-000000000001', 'interview_scheduled'
from candidate_profiles cp
where cp.user_id = '20000000-0000-0000-0000-000000000001';

insert into patient_intakes (id, tenant_id, country_id, created_by, patient_ref, need_summary, risk_level, queue_status, representative_status)
values
  ('60000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'AN-PAT-NG-001', 'Heat exposure, dizziness, and hydration review near Lagos field site', 'High', 'Representative connected', 'Connected'),
  ('60000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000001', 'AN-PAT-KE-014', 'Routine crop-worker wellness follow-up after shift deployment', 'Routine', 'Intake', 'Not connected'),
  ('60000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000001', 'AN-PAT-EG-022', 'High heat index protocol review for warehouse operator', 'Moderate', 'Care plan generated', 'Queued'),
  ('60000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', '20000000-0000-0000-0000-000000000001', 'AN-PAT-CD-009', 'Mobile clinic escalation for remote field intake', 'Critical', '2 callers ahead', 'Pending');

insert into products (id, tenant_id, country_id, name, category, unit, base_price, status)
values
  ('70000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'Premium Cassava Flour', 'crop', 'metric ton', 640, 'active'),
  ('70000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 'Avocado Export Lot', 'crop', 'pallet', 1180, 'active'),
  ('70000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 'Greenhouse Tomato Crates', 'crop', 'crate', 42, 'active'),
  ('70000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000004', 'Robusta Coffee Cooperative Lot', 'crop', 'bag', 96, 'active');

insert into trade_orders (id, tenant_id, product_id, country_id, route_id, active_checkpoint_id, order_number, stage, buyer_interest, total_amount, created_by)
values
  ('80000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '70000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', (select id from route_checkpoints where route_id = '30000000-0000-0000-0000-000000000001' and sequence = 2), 'AN-ORD-0001', 'Quality check', 78, 12800, '20000000-0000-0000-0000-000000000001'),
  ('80000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '70000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000002', (select id from route_checkpoints where route_id = '30000000-0000-0000-0000-000000000002' and sequence = 4), 'AN-ORD-0002', 'Port handoff', 91, 23600, '20000000-0000-0000-0000-000000000001'),
  ('80000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '70000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000003', (select id from route_checkpoints where route_id = '30000000-0000-0000-0000-000000000003' and sequence = 1), 'AN-ORD-0003', 'Buyer review', 64, 4200, '20000000-0000-0000-0000-000000000001');

insert into wallet_accounts (tenant_id, user_id, currency, balance)
values ('00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'USD', 2450);

insert into wallet_transactions (wallet_account_id, provider, amount, transaction_type, provider_reference, status)
select id, 'sandbox-wallet', 1200, 'credit', 'seed-topup-001', 'posted'
from wallet_accounts
where tenant_id = '00000000-0000-0000-0000-000000000001' and user_id = '20000000-0000-0000-0000-000000000001';

insert into wallet_transactions (wallet_account_id, provider, amount, transaction_type, provider_reference, status)
select id, 'sandbox-wallet', -320, 'debit', 'seed-route-fee-001', 'posted'
from wallet_accounts
where tenant_id = '00000000-0000-0000-0000-000000000001' and user_id = '20000000-0000-0000-0000-000000000001';

insert into ai_runs (id, tenant_id, user_id, run_type, provider, model, prompt, response_text, response_metadata)
values
  ('90000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'ai.command_center', 'offline-ai', 'offline-fallback', '{"countryName":"Nigeria","focus":"daily operations"}', 'Command center for Nigeria: prioritize heat-risk health queues, keep Lagos corridor quality checks staffed, and monitor wallet liquidity.', '{"fallback":true}'),
  ('90000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'ai.route_risk', 'offline-ai', 'offline-fallback', '{"routeName":"East Africa Corridor","countryName":"Kenya"}', 'Route risk for Kenya: Mombasa handoff is active; verify cold-chain handover and weather exposure before release.', '{"fallback":true}'),
  ('90000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'health.care_plan', 'sandbox-health-ai', null, '{"patientRef":"AN-PAT-NG-001"}', 'Care plan for AN-PAT-NG-001: confirm hydration, reduce heat exposure, connect representative, and document follow-up.', '{"ehrRecordId":"seed-ehr-001"}');

insert into audit_events (tenant_id, user_id, actor_email, action, entity_type, entity_id, metadata)
values
  ('00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'demo@agrinexus.org', 'auth.login_succeeded', 'user', '20000000-0000-0000-0000-000000000001', '{"source":"seed"}'),
  ('00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'demo@agrinexus.org', 'health.care_plan_generated', 'health', '90000000-0000-0000-0000-000000000003', '{"intakeId":"60000000-0000-0000-0000-000000000001"}'),
  ('00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'demo@agrinexus.org', 'trade.order_created', 'trade', '80000000-0000-0000-0000-000000000002', '{"orderNumber":"AN-ORD-0002"}'),
  ('00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'demo@agrinexus.org', 'workforce.role_assigned', 'workforce', '50000000-0000-0000-0000-000000000001', '{"stage":"interview_scheduled"}');
