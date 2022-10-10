defmodule Ret.Repo.Migrations.CreateContentsRooms do
  use Ecto.Migration

  def change do
    create table(:contents_rooms, primary_key: false) do
      # 콘텐츠 적용 룸 아이디
      add(:contents_room_id, :bigint, default: fragment("ret0.next_id()"), primary_key: true)
      # 콘텐츠 적용 룸 이름
      add(:name, :string, null: false)
      # 콘텐츠 적용 룸 설명
      add(:describe, :string, null: true)
      # 콘텐츠 적용 룸 썸네일 이미지 파일
      add(:screenshot_owned_file_id, :bigint, null: false)
      # 콘텐츠 적용 룸 쎔네일 이미지 파일 접근키
      add(:screenshot_owned_file_uuid, :string, null: false)
      # 콘텐츠 적용 룸내 콘텐츠 순번
      add(:num_pos, :bigint, null: false)
      # 콘텐츠 적용 룸내 콘텐츠 종류(이미지, 동영상)
      add(:type, :string, null: false)
      # 콘텐츠 적용 위치 정보 (좌표)
      add(:coords, :string, null: false)
      # 콘텐츠 적용 룸의 기준 Scene SID
      add(:scene_sid, :string, null: false)
      # 콘텐츠 적용 룸의 기준 Scene 메타정보 파일
      add(:scene_owned_file_uuid, :string, null: false)
      # 콘텐츠 적용 룸의 기준 Scene 원본 파일 접근키
      add(:org_owned_file_uuid, :string, null: false)
      # 작업자 ID
      add(:account_id, :bigint, null: false)
      timestamps()
    end

    create(index(:contents_rooms, [:contents_room_id], unique: true))
  end
end
