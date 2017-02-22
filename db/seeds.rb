#### CHANNELS ####

Channel.destroy_all

channels = %w(general
              westeros
              essos
              winterfell
              the-wall
              riverrun
              kings-landing
              casterly-rock
              dorne
              storms-end
              harrenhal
              highgarden
              iron-throne
              lannisters
              starks
              targaryens
              cute-wolf-pics
              )

norris = ['Channel for all members on SlackOff~',
          'Chuck Norris can binary search unsorted data',
          "When Chuck Norris\' code fails to compile the compiler apologises",
          "There is nothing regular about Chuck Norris' expressions",
          "The class object inherits from Chuck Norris",
          "Chuck Norris' preferred IDE is hexedit",
          "Chuck Norris can't test for equality because he has no equal",
          "Chuck Norris hosting is 101% uptime guaranteed",
          "Chuck Norris can compile syntax errors",
          "Chuck Norris programs do not accept input",
          "Chuck Norris's beard can type 140 wpm",
          "When Chuck Norris points to null, null quakes in fear",
          "Chuck Norris doesn't pair program",
          "Chuck Norris went out of an infinite loop",
          "Chuck Norris can instantiate an abstract class",
          "When Chuck Norris gives a method an argument, the method loses",
          "Chuck Norris' beard is immutable"
          ]

channels.each.with_index do |channel, i|
  ch = Channel.new(name: channel,
                   description: norris[i])
  ch.save
end

ch_start = Channel.first.id + 1
ch_end = Channel.last.id
ch_general = Channel.first.id

#### USERS ####

User.destroy_all

guest = User.new(username: 'guest',
                 email: 'guest@guest.com',
                 photo_url: Faker::Avatar.image('guest', "50x50"),
                 current_channel: ch_general
                )

guest.password = 'guestlogin'
guest.save

users = %w(jon.snow
           ned.stark
           tyrion.lannister
           daenerys.targaryen
           jaime.lannister
           petyr.baelish
           arya.stark
           sandor.clegane
           theon.greyjoy
           samwell.tarly
           sansa.stark
           robb.stark
           cersei.lannister
           joffrey.baratheon
           ramsay.bolton
           brienne.of.tarth
           ygritte
           lord.varys
           stannis.baratheon
           oberyn.martell
           jorah.mormont
           khal.drogo
           maester.aemon
           podrick.payne
           jojen.reed
           davos.seaworth
           catelyn.stark
           melisandre
           gilly
           daario.naharis
           roose.bolton
          )

users.each do |user|
  char = User.new(username: user,
                  email: Faker::Internet.email,
                  photo_url: Faker::Avatar.image(user, "50x50"),
                  current_channel: ch_general
                 )
  char.password = user
  char.save
end

user_start = User.first.id
user_end = User.last.id

### Subscriptions

Subscription.destroy_all

(user_start..user_end).to_a.each do |i|
  user = User.find(i)
  channels = [ch_general]

  n = (3..10).to_a.sample.to_i

  until channels.length == n
    channels << (ch_start..ch_end).to_a.sample.to_i
    channels.uniq!
  end

  n.times do
    Subscription.create(user_id: user.id,
                        channel_id: channels.shift
                        )
  end

  user.current_channel = user.channels.sample.id
end

### Messages

Message.destroy_all

15.times do
  i = (user_start..user_end).to_a.sample.to_i

  user_id = User.find(i).id
  content = Faker::Hacker.say_something_smart

  Message.create(user_id: user_id,
                 channel_id: ch_general,
                 content: content)
end

300.times do
  i = (user_start..user_end).to_a.sample.to_i

  user_id = User.find(i).id
  ch_id = (ch_start..ch_end).to_a.sample.to_i
  content = Faker::Hacker.say_something_smart

  Message.create(user_id: user_id,
                 channel_id: ch_id,
                 content: content)
end

### Direct Messages

user1 = User.first
user2 = User.find(user1.id + 1)
user3 = User.find(user2.id + 1)
user4 = User.find(user3.id + 1)

dm1_users = [user1.username, user2.username].sort
dm1_channel_name = dm1_users.join('').gsub('.', '')

dm1 = Channel.create(name: dm1_channel_name,
                     description: 'Direct Message~',
                     private: true)

dm1_sub1 = Subscription.create(user_id: user1.id,
                               channel_id: dm1.id)

dm1_sub2 = Subscription.create(user_id: user2.id,
                               channel_id: dm1.id)

dm2_users = [user1.username, user2.username, user3.username].sort
dm2_channel_name = dm2_users.join('').gsub('.', '')

dm2 = Channel.create(name: dm2_channel_name,
                     description: 'Direct Message~',
                     private: true)

dm2_sub1 = Subscription.create(user_id: user1.id,
                               channel_id: dm2.id)

dm2_sub2 = Subscription.create(user_id: user2.id,
                               channel_id: dm2.id)

dm2_sub3 = Subscription.create(user_id: user3.id,
                               channel_id: dm2.id)

# dm3_users = [user1.username, user2.username, user3.username, user4.username].sort
# dm3_channel_name = dm3_users.join('').gsub('.', '')
#
# dm3 = Channel.create(name: dm3_channel_name,
#                      description: 'Direct Message~',
#                      private: true)
#
# dm3_sub1 = Subscription.create(user_id: user1.id,
#                                channel_id: dm3.id)
#
# dm3_sub2 = Subscription.create(user_id: user2.id,
#                                channel_id: dm3.id)
#
# dm3_sub3 = Subscription.create(user_id: user3.id,
#                                channel_id: dm3.id)
#
# dm3_sub4 = Subscription.create(user_id: user4.id,
#                                channel_id: dm3.id)
