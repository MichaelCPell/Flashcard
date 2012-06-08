class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :creator
      t.integer :course_id
      t.string :doc_type
      t.string :name

      t.timestamps
    end
  end
end
