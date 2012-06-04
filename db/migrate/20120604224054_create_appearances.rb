class CreateAppearances < ActiveRecord::Migration
  def change
    create_table :appearances do |t|
      t.integer :deck_id
      t.integer :card_id

      t.timestamps
    end
  end
end
